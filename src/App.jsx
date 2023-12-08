import { useMemo } from "react";
import turkishLang from "../data/SunEditorTRLocalization/index";
import "suneditor/dist/css/suneditor.min.css";
import SunEditor from "suneditor-react";
function App() {
  const memoizedTurkishLang = useMemo(() => turkishLang, []);

  return (
    <div>
      <h2>Suneditor Turkish Localization</h2>
      <SunEditor
        lang={memoizedTurkishLang}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["formatBlock"],
            ["bold", "italic", "removeFormat"],
            ["link"],
            ["image"],
            ["list"],
            ["showBlocks"],
            ["fullScreen"],
          ],
        }}
        defaultValue="<p>Merhaba Dünya</p>"
        onChange={(content) => console.log(content)}
        id="editor"
        name="editor"
        hideToolbar={false}
        width="100%"
        height="180px"
      />
    </div>
  );
}

export default App;
