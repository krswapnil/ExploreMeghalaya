import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p> Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Cherrapunji"
        text=" Cherrapunji is regarded as one of the wettest places on earth as the highest rainfall is foreseen during the year. Tourists from around the world come here to see the Dain-Thlen, Kynrem, and Nohkalikai waterfalls that are known as the popular waterfalls of Cherrapunji. The town encompasses some of the best waterfalls in Meghalaya.

        "
        img1="https://images.unsplash.com/photo-1568105533812-c4964a4ea14e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZ2hhbGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        img2="https://images.unsplash.com/photo-1581583730666-a6a2aab9a2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lZ2hhbGF5YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Double-decker Living Root Bridge"
        text=" Situated in Cherrapunji, Meghalaya, a double-decker living root bridge is famous for its bridge made up of roots of an Indian rubber tree. The bridge is 3 km long at a height of 2400 feet. The most scenic experience is when the Umshiang river flows beneath the bridge and you are walking over it. It is the oldest natural bridge made around 200 years ago but only 50 people can be accommodated at one time. You have got to visit this place on your Meghalaya honeymoon."
        img1="https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVnaGFsYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        img2="https://com943237668.files.wordpress.com/2022/05/20220217_073522-2.jpg?w=766"
      />
      <DestinationData
        className="first-des"
        heading="Mawsmai Nongthymmai Eco Park"
        text=" The Mawsmai Eco Park is one of the highly recommended tourist places in Cherrapunji to visit during the monsoons. The eco-park managed by the Meghalaya Tourism offers panoramic views of the Green Canyons of Cherrapunji, as well as the far off Sylheti Plains of Bangladesh. The park is ideal for families as a picnic spot and to indulge in photography. Indeed, one of the top places to see in Cherrapunji."
        img1="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/06/Nongthymmai-Eco-Park.jpg"
        img2="https://images.unsplash.com/photo-1552978534-9d01e1f91517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVnaGFsYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
};

export default Destination;
