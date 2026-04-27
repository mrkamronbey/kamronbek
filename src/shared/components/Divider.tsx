import { Container } from "./Container";

export function Divider() {
  return (
    <div className="bg-canvas">
      <Container className="px-12 max-md:px-6">
        <div className="h-px bg-line" />
      </Container>
    </div>
  );
}