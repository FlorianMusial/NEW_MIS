import React from "react";
import { counter01Db } from "../../AUXILIARY_OBJECTS/Counter01";
import "./NovelSection.scss";
import { doc, updateDoc, increment } from "firebase/firestore";

const NovelSection = () => {

  const handleDownload01 = async () => {
    const counterRef = doc(counter01Db, "PortraitData", "NsXOGRWHw71ZuLGxy2BQ");

    try {
      await updateDoc(counterRef, {
        the_unwelcomers_dwnld_counter: increment(1)
      });
      window.alert("PLIK ŚCIĄGNIĘTY")

    } catch (error) {
      console.error("Error updating counter: ", error);
    }
  };

  return (
    <div className="novel_section">
      <h2 className="headline">DARMOWY E-BOOK DO POBRANIA</h2>
      <p className="description">
        Na rynku nie widać zbyt wielu thrillerów z akcją w Lublinie.
        Postanowiłem nieco to zmienić :)
        Pobierzcie mój autorski dreszczowiec - całkowicie za darmo. Z powodu choroby nie mogę już angażować 
        się w pracę fizyczną, która do tej pory zapewniała mi utrzymanie. Dlatego jeśli chcielibyście
        dobrowolnie wesprzeć mój projekt pisarski, możecie przekazać niewielką darowiznę na konto: 56 8707 1045 0103 2969 3000 0001.
        Tytuł przelewu: „Darowizna”. Darowizna jest całkowicie dobrowolna i nie jest związana z żadnymi dodatkowymi prawami ani świadczeniami
        - ebook pozostaje darmowy dla wszystkich. Każda darowizna pozwala mi poświęcić nieco więcej czasu na pisanie, które kocham.
      </p>
      <a
        href="/NEW_MIS/FLORIAN_MUSIAŁ_NIEMILEWIDZIANI.pdf"
        download
        className="download_link"
        onClick={handleDownload01}
      >
        POBIERZ POWIEŚĆ "NIEMILEWIDZIANI"
        <span className="icon">&#8681;</span>
        <img src="/NEW_MIS/NIEMILEWIDZIANI.png" alt="okładka" />
      </a>

    </div>
  );
};

export default NovelSection;
