import { useEffect, useRef, useState } from "react";
import { Button } from "../components/button";
import { HeaderItem } from "../components/header-item";
import { HEADER_ITEMS_MOCK } from "../mocks/header-items-mock";
import { Heading } from "../components/heading";
import { Description } from "../components/description";
import { CirclePlay, X } from "lucide-react";
import { createPortal } from "react-dom";
import thumbImage from "../assets/images/thumb-phones.png";
import homeScreenImage from "../assets/images/phone-one.png";

interface SetRef {
  index: number;
  element: HTMLElement | null;
}

function App() {
  const [modalVideo, setModalVideo] = useState<boolean>(false);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  const modalVideoRef = useRef<HTMLElement | null>(null);

  const setRef = ({ index, element }: SetRef) => {
    if (element !== null) {
      sectionsRefs.current[index] = element;
    }
  };

  const scrollToSection = (index: number) => {
    sectionsRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleActiveModal = () => {
    setModalVideo(true);
  };

  const handleDesactiveModal = () => {
    setModalVideo(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      console.log(target);

      if (modalVideoRef.current?.contains(target as Node)) {
        if (target.className !== "video-modal") {
          setModalVideo(false);
        }
      }
    };

    if (modalVideo && modalVideoRef.current) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [modalVideo]);

  const Modal = () => {
    return (
      <div
        ref={modalVideoRef}
        className="modal-video fixed w-full h-full bg-black/60 inset-0 flex flex-col justify-center items-center"
      >
        <div className="flex justify-between flex-col">
          <button onClick={handleDesactiveModal} className="self-end">
            <X color="#FFFFFF" />
          </button>
          <video width="800" height="800" className="video-modal" controls>
            <source
              type="video/mp4"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </video>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
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
          className="flex flex-col md:flex-row"
        >
          <div className="flex flex-col justify-center gap-5">
            <Heading
              title="Novas experiências, facilidade Extra!"
              variant="lg"
            />
            <Description
              text="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              variant="primary"
            />
            <div className="flex items-center gap-3">
              <Button variant="primary">
                <span>Comece Agora</span>
              </Button>

              <button
                className="flex gap-3 items-center hover:underline"
                onClick={handleActiveModal}
              >
                <CirclePlay />
                <span className="font-medium text-lg text-black">
                  Assistir ao Vídeo
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={thumbImage}
              className="w-[680px] h-[540px] object-cover"
            />
          </div>
        </section>
        <section
          ref={(element) => setRef({ index: 1, element })}
          className="flex-col gap-6"
        >
          <section className="grid grid-cols-1 md:grid-cols-2 items-center">
            <img src={homeScreenImage} alt="" />

            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-4xl">
                Transforme seus Projetos em Experiências Imersivas
              </h1>
              <p className="text-[#7F7F7F] text-base font-medium">
                O ARQ360 foi projetado para simplificar o processo de
                apresentação de projetos de arquitetura. Com nossa tecnologia de
                visualização em 360 graus, os clientes podem caminhar
                virtualmente pelos ambientes, entendendo melhor a visão do
                arquiteto e tomando decisões com mais confiança.
              </p>

              <div>
                <p className="font-bold text-base">
                  &bull; Fácil armazenamento de projetos
                </p>
                <p className="font-bold text-base">
                  &bull; Visualização interativa em 360 graus
                </p>
                <p className="font-bold text-base">
                  &bull; Integração com dispositivos de realidade virtual
                </p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-4xl">
                Transforme seus Projetos em Experiências Imersivas
              </h1>
              <p className="text-[#7F7F7F] text-base font-medium">
                O ARQ360 foi projetado para simplificar o processo de
                apresentação de projetos de arquitetura. Com nossa tecnologia de
                visualização em 360 graus, os clientes podem caminhar
                virtualmente pelos ambientes, entendendo melhor a visão do
                arquiteto e tomando decisões com mais confiança.
              </p>

              <div>
                <p className="font-bold text-base">
                  &bull; Fácil armazenamento de projetos
                </p>
                <p className="font-bold text-base">
                  &bull; Visualização interativa em 360 graus
                </p>
                <p className="font-bold text-base">
                  &bull; Integração com dispositivos de realidade virtual
                </p>
              </div>
            </div>

            <img src={homeScreenImage} alt="" />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 items-center">
            <img src={homeScreenImage} alt="" />

            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-4xl">
                Transforme seus Projetos em Experiências Imersivas
              </h1>
              <p className="text-[#7F7F7F] text-base font-medium">
                O ARQ360 foi projetado para simplificar o processo de
                apresentação de projetos de arquitetura. Com nossa tecnologia de
                visualização em 360 graus, os clientes podem caminhar
                virtualmente pelos ambientes, entendendo melhor a visão do
                arquiteto e tomando decisões com mais confiança.
              </p>

              <div>
                <p className="font-bold text-base">
                  &bull; Fácil armazenamento de projetos
                </p>
                <p className="font-bold text-base">
                  &bull; Visualização interativa em 360 graus
                </p>
                <p className="font-bold text-base">
                  &bull; Integração com dispositivos de realidade virtual
                </p>
              </div>
            </div>
          </section>
        </section>
        <section ref={(element) => setRef({ index: 2, element })}>
          section3
        </section>
      </main>

      {modalVideo && createPortal(Modal(), document.body)}
    </div>
  );
}

export default App;
