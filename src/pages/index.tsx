import { useRef } from "react";
import { Button } from "../components/button";
import { HeaderItem } from "../components/header-item";
import { HEADER_ITEMS_MOCK } from "../mocks/header-items-mock";

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
          <h1>Download</h1>
        </Button>
      </header>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, impedit
      cupiditate. Beatae labore earum facilis necessitatibus ex itaque
      voluptatem dolores nobis perferendis? Esse nam sint, aliquid illum
      molestias quaerat cumque? Consectetur molestiae aliquid incidunt eius nam
      voluptas sit natus, ex possimus? Aliquid dolor laudantium ab inventore
      officia iusto! Perferendis earum voluptatibus atque, dolore nobis
      architecto consectetur nemo fugit? Facilis quasi ipsa accusantium magnam
      enim, autem totam quidem iusto nisi sequi dolorum optio praesentium
      repudiandae aut itaque aspernatur ad, adipisci in corporis vitae ratione?
      Quas fugit autem eveniet corrupti at repudiandae nemo! Nostrum ducimus
      quos accusamus quas quis at officiis commodi veritatis aliquid, soluta
      saepe eaque autem molestiae porro earum numquam cupiditate modi beatae
      ullam distinctio veniam doloremque quibusdam enim. Hic dolore minima
      architecto soluta, natus eligendi dolorem non qui mollitia veniam enim
      necessitatibus repudiandae laborum totam cumque beatae, nulla voluptas
      dignissimos nam rerum possimus alias! Architecto quibusdam et enim, ex
      iste cupiditate tenetur nam est, praesentium maxime illum. Repellendus
      nemo ab sit quas, excepturi cupiditate sequi, culpa eum consectetur, aut
      debitis! Accusantium rerum facere quaerat dolorem ex quam vero laborum
      praesentium suscipit facilis perferendis tempore, perspiciatis ipsa! Ipsa
      suscipit, adipisci incidunt ad minima beatae! Sunt saepe cupiditate
      inventore delectus id molestiae ut, suscipit repudiandae corporis ducimus
      quasi, reprehenderit cumque cum odit beatae praesentium voluptates sed,
      nostrum expedita tempora asperiores. Similique, explicabo aliquid alias
      ipsum quos quisquam obcaecati? Unde ea nulla adipisci facere sequi hic,
      deleniti esse sit minus exercitationem error, commodi voluptatem ex
      delectus a ut quod veniam, earum quidem aliquid. Cumque, consequuntur,
      saepe voluptatibus magnam, nesciunt aut tempora facere asperiores eveniet
      libero tenetur ducimus possimus cum unde consectetur nisi laboriosam
      commodi! Quis aliquam est reiciendis deserunt asperiores optio iure saepe
      perspiciatis sit nam fugiat suscipit quae blanditiis, harum labore
      consequatur natus ipsam nulla pariatur iste possimus repellat. Tempore
      dolor commodi, hic nam fugit illo laudantium quibusdam sunt earum error
      officia laborum iste quae tempora impedit inventore modi quam, facere
      asperiores? Commodi dolorem quo, totam beatae nulla voluptatibus quae
      consequatur aspernatur impedit earum delectus, distinctio a officia
      assumenda suscipit quia. Ipsum soluta blanditiis exercitationem saepe quos
      doloribus dolorum hic, doloremque voluptatem ipsam sint eius iure?
      Molestiae unde at repudiandae quae nobis ex, sit, modi sapiente minus
      maxime saepe deserunt culpa consectetur aliquam rerum dolorem, omnis
      iusto. Totam magni iusto accusantium, placeat dolores consequuntur
      molestiae consequatur voluptas mollitia. Reprehenderit velit tenetur,
      dicta molestiae iste corporis? Sit, id optio rerum dolores reprehenderit
      voluptatem laborum. At eveniet veritatis numquam molestiae alias
      cupiditate quidem iste, placeat corrupti nihil. Repudiandae laborum quis
      officia ad velit. Unde provident amet quisquam voluptas architecto
      voluptates nulla autem fugiat odit repudiandae dolorum eveniet vel, totam
      possimus porro animi? Provident corrupti commodi beatae incidunt minima
      libero fugit maxime aperiam magnam unde neque iste facere dignissimos
      deserunt excepturi obcaecati, quos non, esse odit voluptatibus omnis
      mollitia quas quaerat fuga. Expedita ipsa quod totam eveniet minus quaerat
      at tempora alias illo enim magni obcaecati eos, fugiat porro assumenda
      quisquam impedit optio excepturi eaque quos soluta quis nihil, quae nam?
      Eligendi delectus quasi rerum dicta voluptates labore ipsum velit ipsa
      repellendus maxime modi similique voluptas error laboriosam, blanditiis
      deserunt aliquam eos neque laborum deleniti officiis dolorem iusto, ab
      quam? Libero ullam distinctio quos exercitationem dolor minus soluta.
      Facere numquam nulla, tempora earum consequuntur vero eaque illo iure est
      architecto omnis provident error enim molestiae quam minus explicabo modi.
      Consequatur saepe quas, repellat consequuntur natus dolor atque non rem
      corrupti minima pariatur ipsam officiis facere corporis quisquam veritatis
      suscipit eius aut doloribus adipisci qui beatae eos perspiciatis? Non
      enim, adipisci ex molestiae necessitatibus natus quod amet mollitia
      accusamus exercitationem facere dicta corrupti iure eveniet expedita.
      Ratione debitis accusantium pariatur veritatis sunt aspernatur soluta, ex,
      vel consectetur ullam eius eveniet inventore! Voluptas, dolorem, deleniti
      impedit accusamus omnis unde quaerat, eos veniam consectetur blanditiis
      eaque assumenda illum laboriosam accusantium error ratione at placeat!
      Libero dicta tempora esse, sequi quaerat rem nihil nisi illo aut?
      Accusamus consequatur officia est mollitia fugit cupiditate, in
      repellendus quis corporis! Quaerat, iure aperiam nihil maiores id possimus
      cumque facere illo libero! Quasi repellendus praesentium fugiat laborum
      laboriosam quam molestias culpa explicabo rerum repudiandae hic, sequi ea
      error voluptate magnam expedita distinctio. Molestiae, cupiditate! Enim
      blanditiis laboriosam soluta earum quia asperiores fugit modi libero nisi,
      sit amet, numquam iure eaque possimus reprehenderit perspiciatis placeat
      cum eos! Veniam saepe unde porro inventore eum, eveniet rem. Et obcaecati
      voluptates hic possimus praesentium officiis corrupti incidunt sapiente
      maiores soluta placeat, at iste quis cupiditate molestias id voluptate
      sequi quasi enim, unde veniam ipsum? Perspiciatis ut assumenda expedita
      quis libero, blanditiis explicabo ad similique? Cumque, dolore. Vitae
      inventore, consequatur saepe minima, earum laudantium mollitia excepturi
      quo molestiae corporis minus ducimus natus nisi? Modi omnis exercitationem
      iure non quia inventore impedit hic culpa excepturi ullam, totam quod sunt
      necessitatibus eum quisquam illum ut delectus, quasi eligendi aliquam quos
      voluptate molestiae! Dignissimos non, voluptatum est facilis adipisci
      tenetur, dicta atque, culpa quibusdam eum molestiae. Amet facere quae
      laboriosam ipsam quidem ullam, eligendi delectus sunt dolorum totam
      voluptate officia harum sequi unde doloribus animi minus consequuntur et
      quis quisquam omnis est sed exercitationem nobis. Amet quam debitis,
      repudiandae reiciendis facilis voluptatem at mollitia fugit repellendus
      nesciunt inventore nihil minima. Praesentium, fugit rerum. Aliquam tempore
      aspernatur adipisci optio architecto laudantium animi debitis fuga
      temporibus! Eaque aliquam ipsam culpa ipsa eos esse nulla porro odit?
      Placeat, repellat assumenda architecto deserunt, aliquid, ea quis
      reiciendis iure iste recusandae dolorum ratione in nulla.
      <section ref={(element) => setRef({ index: 0, element })}>
        section1
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
