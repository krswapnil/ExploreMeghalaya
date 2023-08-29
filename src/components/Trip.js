import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore the beauty of the North East India</p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1625826415766-001bd75aaf52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVnaGFsYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          heading="Krang Suri Falls"
          text="Krang Suri is blessed with shimmering blue waters and sparkling sunlight. This heady mixture of nature is sometimes known to create a rainbow. It's truly a magical pool in nature's wonderland."
        />
        <TripData
          image="https://images.unsplash.com/photo-1521437620269-f477f5437820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVnaGFsYXlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          heading="Umngot River"
          text="The northeastern part of the country has some offerings that can soothe the traveller's soul. There are so many places of wanderlust and one of them is the Umngot River situated at Dawki."
        />
        <TripData
          image="https://images.unsplash.com/photo-1629465659213-d28388bc05ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3011&q=80"
          heading="Laitlum Canyons"
          text="'Laitlum Canyons' literally means end of the world or end of hills. Blanketed in velvety white clouds and rolling hills and deep gorges – the view may remind you of a scene from the musical ‘The Sound of Music’. "
        />
      </div>
    </div>
  );
}
export default Trip;
