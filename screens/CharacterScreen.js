import { ScrollView } from "react-native";
import GridImageView from "react-native-grid-image-viewer";
export default function CharacterScreen({ navigation }) {
  return (
    <ScrollView>
      <GridImageView
        data={[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ada_Lovelace.jpg/800px-Ada_Lovelace.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/David_Filo.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jerry_yang_2010%284555102908%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Larry_Page_in_the_European_Parliament%2C_17.06.2009.jpg/800px-Larry_Page_in_the_European_Parliament%2C_17.06.2009.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Sergey_Brin_Ted_2010.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1024px-Anonymous_emblem.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3f/Edward_Snowden_2013-10-9_%281%29_%28cropped%29.jpg",
        ]}
        heightOfGridImage={320}
        testi={[
          "Ada Lovelace",
          "Alan Turing",
          "Steve Jobs",
          "Bill Gates",
          "Tim Barners-Lee",
          "David Filo",
          "Jerry Yang",
          "Larry Page",
          "Sergey Brin Ted",
          "Anonymus",
          "Mark Zuckerberg",
          "Edward Snowden"
        ]}
      />
    </ScrollView>
  );
}
