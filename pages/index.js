import React, { Component } from "react";
import { Button, Input, Icon, Upload, Card, Statistic, Row, Col } from "antd";
import axios from "axios";
let ml5;
let featureExtractor;
let regressor;
const Dragger = Upload.Dragger;
import firebase from "firebase";
import { ClimbingBoxLoader } from "react-spinners";

if (typeof window !== "undefined") {
  ml5 = require("ml5");
  featureExtractor = ml5.featureExtractor("MobileNet", () => {}, {
    version: 1,
    alpha: 1.0,
    topk: 3,
    learningRate: 0.0001,
    hiddenUnits: 100,
    epochs: 20,
    numClasses: 2,
    batchSize: 0.4
  });
  regressor = featureExtractor.regression();
}

class App extends Component {
  state = {
    text: "",
    targetUri: "",
    image: {},
    targetImage: {},
    memeTypes: [],
    images: [],
    memeCount: [],
    response: "",
    prediction: "",
    loading: true,
    loss: 0
  };

  static async getInitialProps({ store, query, isServer, test }) {
    const config = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId
    };

    return {
      config
    };
  }

  async componentDidMount() {
    if (!firebase.apps.length) {
      await firebase.initializeApp(this.props.config);
    }

    const snapshot = await firebase
      .database()
      .ref()
      .once("value");
    const result = await snapshot.val();
    const memeTypes = result.types;

    let counter = 0;
    this.setState({
      images: result.data,
      memeTypes
    });

    result.data.map(image => {
      const index = memeTypes.indexOf(image.name);
      const newMemeCount = this.state.memeCount;
      if (newMemeCount[index]) {
        newMemeCount[index]++;
      } else {
        newMemeCount[index] = 1;
      }

      this.setState({
        memeCount: newMemeCount
      });

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = async () => {
        await regressor.addImage(img, index);
        counter++;
        if (counter == result.data.length - 1) {
          this.setState({ loading: false });
        }
      };
      img.src = image.uri;
      img.width = 250;
      img.height = 250;
    });
  }

  handleTrain = async () => {
    await regressor.train(lossValue => {
      if (lossValue) {
        let loss = lossValue;
        this.setState({ loss });
      } else {
        this.setState({ loss: 0 });
      }
    });
  };

  handleUpload = async () => {
    this.setState({ response: "", prediction: "" });
    const e = this.state.targetImage;
    var formData = new FormData();
    formData.append("image", e);

    const { data } = await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      data: formData,
      headers: {
        authorization: "Client-ID 7e4e554040292df"
      }
    });

    this.setState({
      targetUri: data.data.link
    });
  };

  handleIdentify = () => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = async () => {
      const { value } = await regressor.predict(img);
      this.setState({
        response: value,
        prediction: this.state.memeTypes[
          Math.round(value) > this.state.memeTypes.length - 1
            ? this.state.memeTypes.length - 1
            : Math.round(value)
        ]
      });
    };
    img.src = this.state.targetUri;
    img.width = 250;
    img.height = 250;
  };

  handleAdd = async event => {
    const e = this.state.image;
    const newData = this.state.images;

    var formData = new FormData();
    formData.append("image", e);
    formData.append("name", this.state.title);

    const { data } = await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      data: formData,
      headers: {
        authorization: "Client-ID 8d1d1c33ea509f6"
      }
    });

    let memeTypes = this.state.memeTypes;

    let index = memeTypes.indexOf(this.state.text);
    if (index == -1) {
      memeTypes.push(this.state.text);
    }
    index = memeTypes.indexOf(this.state.text);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = async () => {
      await regressor.addImage(img, index);
    };
    img.src = data.data.link;
    img.width = 250;
    img.height = 250;

    newData.push({
      name: this.state.text,
      uri: data.data.link
    });

    await firebase
      .database()
      .ref()
      .set({ data: newData, types: memeTypes });
  };

  onTextChange = event => {
    this.setState({ text: event.target.value });
  };

  renderCards = () => {
    return this.state.memeTypes.map((meme, index) => {
      return (
        <Card
          hoverable
          key={meme}
          style={{
            width: "12vw",
            borderColor: meme == this.state.prediction ? "#00e676" : null
          }}
        >
          <div
            style={{ color: "black", fontSize: "0.8vw", fontWeight: "bold" }}
          >
            {meme}
          </div>
          <div style={{ color: "black", fontSize: "0.8vw" }}>
            {`${
              this.state.memeCount[index] ? this.state.memeCount[index] : 0
            } Images`}
          </div>
        </Card>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            postition: "absolute",
            top: 0,
            width: "100vw",
            height: "50vh"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            width: "60%",
            marginTop: "1vh"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "row" }}>
              <Icon
                type="area-chart"
                style={{
                  fontSize: "2vw",
                  display: "flex",
                  alignItems: "center",
                  color: "white"
                }}
              />
              <div
                style={{
                  fontSize: "2vw",
                  fontWeight: "bold",
                  color: "white",
                  marginLeft: "0.5vw"
                }}
              >
                MemeDB
              </div>
            </div>

            <div
              style={{ color: "white", display: "flex", alignItems: "center" }}
            >
              {`Memes Known: ${this.state.memeTypes.length}`}
            </div>
          </div>

          <div
            style={{
              fontSize: "6vw",
              fontWeight: "bold",
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: "10vh"
            }}
          >
            Meme Classifier
          </div>
        </div>

        {!this.state.loading ? (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                marginTop: "2vh",
                marginBottom: "2vh"
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vw",
                    color: "black"
                  }}
                >
                  Training Data
                </div>

                <Input
                  onChange={this.onTextChange}
                  value={this.state.text}
                  placeholder="Meme name"
                />

                <Button
                  style={{
                    marginTop: "2vh",
                    backgroundColor: "black",
                    color: "white"
                  }}
                  onClick={this.handleAdd}
                >
                  <Icon type="plus" />
                  Add Image
                </Button>
              </div>

              <div style={{ width: "30%" }}>
                <Dragger
                  showUploadList={false}
                  onChange={event => {
                    this.setState({
                      image:
                        event.fileList[event.fileList.length - 1].originFileObj
                    });
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" style={{ color: "black" }} />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                justifyContent: "space-evenly"
              }}
            >
              {this.renderCards()}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "2vh",
                marginBottom: "2vh",
                justifyContent: "space-evenly",
                width: "100vw"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div style={{ fontWeight: "bold" }}>Loss</div>
                <div>{this.state.loss}</div>
              </div>

              <Button
                style={{
                  backgroundColor: "black"
                }}
                onClick={this.handleTrain}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    type="sliders"
                    style={{
                      color: "white",
                      marginRight: "0.5vw"
                    }}
                  />
                  <div style={{ color: "white" }}>Train</div>
                </div>
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
                marginBottom: "2vh"
              }}
            >
              <div style={{ width: "30%" }}>
                <Dragger
                  showUploadList={false}
                  onChange={event => {
                    this.setState({
                      targetImage:
                        event.fileList[event.fileList.length - 1].originFileObj
                    });
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" style={{ color: "black" }} />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </div>

              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vw",
                    color: "black"
                  }}
                >
                  Target Data
                </div>

                <div>{`Regression: ${this.state.response}`} </div>
                <div>{`Prediction: ${this.state.prediction}`}</div>

                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Button
                    style={{
                      marginTop: "2vh",
                      backgroundColor: "black",
                      color: "white"
                    }}
                    onClick={this.handleUpload}
                  >
                    <Icon type="plus" />
                    Add Image
                  </Button>
                  <Button
                    style={{
                      marginTop: "2vh",
                      color: "black"
                    }}
                    onClick={this.handleIdentify}
                  >
                    <Icon type="eye" />
                    Predict
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              weight: "100vw",
              flexDirection: "column"
            }}
          >
            <ClimbingBoxLoader style={{ width: "20vw" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>Loading</div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
