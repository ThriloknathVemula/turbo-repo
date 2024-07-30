import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";


export default function Home() {
  return (
    <>
      <Button appName="Web App">
        Hi there
      </Button>
      <Admin/>
      <InputBox/>
    </>
  );
}
