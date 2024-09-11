import { useRef } from "react";
import { Button } from "../components/button";
import { HeaderItem } from "../components/header-item";
import { HEADER_ITEMS_MOCK } from "../mocks/header-items-mock";
import { Heading } from "../components/heading";
import { Description } from "../components/description";
import { CirclePlay } from "lucide-react";
import thumbImage from "../assets/images/thumb-phones.png";

interface SetRef {
  index: number;
  element: HTMLElement | null;
}

function App() {
  const sectionsRefs = useRef<HTMLElement[]>([]);

  const setRef = ({ index, element }: SetRef) => {
    if (element !== null) {
      sectionsRefs.current[index] = element;
    }
  };

  const scrollToSection = (index: number) => {
    sectionsRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-[1100px] mx-auto py-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold capitalize">ARQ360</h1>

        <menu className="flex gap-4 items-center justify-center">
          {HEADER_ITEMS_MOCK.map((item, i) => {
            return (
              <HeaderItem
                title={item.title}
                isActive
                key={`@header-item-key/${i}_${new Date()}`}
                onClick={() => scrollToSection(i)}
              />
            );
          })}
        </menu>

        <Button variant="primary">
          <span>Download</span>
        </Button>
      </header>

      <section
        ref={(element) => setRef({ index: 0, element })}
        className="flex"
      >
        <div className="flex flex-col justify-center gap-5">
          <Heading title="Novas experiências, facilidade Extra!" variant="lg" />
          <Description
            text="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
            variant="primary"
          />
          <div className="flex items-center gap-3">
            <Button variant="primary">
              <span>Comece Agora</span>
            </Button>
            <CirclePlay />
            <span className="font-medium text-lg text-black">
              Assistir ao Vídeo
            </span>
          </div>
        </div>
        <div>
          <img src={thumbImage} className="w-[680px] h-[540px] object-cover" />
        </div>
      </section>
      <section ref={(element) => setRef({ index: 1, element })}>
        section2
      </section>
      <section ref={(element) => setRef({ index: 2, element })}>
        section3
      </section>
    </main>
  );
}

export default App;
