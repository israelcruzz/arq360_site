import { HeaderItem } from "../components/header-item";
import { HEADER_ITEMS_MOCK } from "../mocks/header-itens-mock";

function App() {
  return (
    <main className="max-w-[1100px] mx-auto py-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold capitalize">ARQ360</h1>

        <menu className="flex gap-2 items-center justify-center">
          {HEADER_ITEMS_MOCK.map((item, i) => {
            return (
              <HeaderItem
                title={item.title}
                key={`@header-item-key/${i}_${new Date()}`}
              />
            );
          })}
        </menu>
      </header>
    </main>
  );
}

export default App;
