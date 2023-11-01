import Input from "./component/Input";
import Form, { type formHandle } from "./component/Form";
import { Button } from "./component/Button";

import { useRef } from "react";

function App() {
  const customForm = useRef<formHandle>(null);


  function handleSave(value: unknown) {
    customForm.current?.clear();
    console.log(value)
  }


  return <main>
    <Form onSave={handleSave} ref={customForm}>
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Age" id="age" />
      <Button>
        Save
      </Button>
    </Form>
  </main>;
}

export default App;
