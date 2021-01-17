import React from "react";
import styled from "styled-components";
import { C_Btn, D_Btn } from "../commonComponents";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || `column`};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 60px;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 0px 10px;

  &:focus {
    box-shadow: 2px 3px 2px #00a8ff;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 10px;
  resize: none;

  &:focus {
    box-shadow: 2px 3px 2px #00a8ff;
  }
`;

class Write extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      description: "",
    };
  }
  render() {
    const { title, author, description } = this.state;
    return (
      <Wrapper>
        <Title>
          {console.log(this.props.match.params.boardType)}게시글 작성하기
        </Title>

        <TextInput
          name="title"
          value={title}
          type="text"
          placeholder="Title..."
          onChange={this._valueChangeHandelr}
        />
        <TextInput
          name="author"
          value={author}
          type="text"
          placeholder="Author..."
          onChange={this._valueChangeHandelr}
        />
        <TextArea
          name="description"
          value={description}
          placeholder="Description..."
          onChange={this._valueChangeHandelr}
        />

        <Wrapper direction={`row`}>
          <C_Btn onClick={this._writeHandelr}>작성하기</C_Btn>
          <D_Btn onClick={() => this.props.history.goBack()}>작성취소</D_Btn>
        </Wrapper>
      </Wrapper>
    );
  }
  _valueChangeHandelr = (e) => {
    let nextstate = {};

    nextstate[e.target.name] = e.target.value;
    this.setState(nextstate);
  };

  _writeHandelr = async () => {
    const { title, author, description } = this.state;
    if (!title || title.trim() === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!author || author.trim() === "") {
      alert("작성자를 입력해주세요.");
      return;
    }

    if (!description || description.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const inputData = {
      title: title,
      author: author,
      description: description,
      type: this.props.match.params.boardType,
    };

    await axios
      .post("/api/writeBoard", {
        params: { inputData },
      })
      .then((response) => {
        if (response.data === 0) {
          alert("실패");
        } else {
          alert("성공");
          this.props.history.push(`/${this.props.match.params.boardType}board`);
        }
      });
  };
}

export default Write;
