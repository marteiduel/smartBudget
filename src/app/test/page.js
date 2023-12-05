"use client";
import React from "react";
import {
  Provider,
  TextField,
  Form,
  Flex,
  Button,
  defaultTheme,
} from "@adobe/react-spectrum";
function Test() {
  return (
    <Provider theme={defaultTheme}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
        validationBehavior="native"
      >
        <Flex direction="column">
          <TextField name="test" type="text" label="test" isRequired />
          <Button type="submit">Submit</Button>
        </Flex>
      </Form>
    </Provider>
  );
}

export default Test;
