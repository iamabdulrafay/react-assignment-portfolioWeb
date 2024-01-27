import { useLocation, useParams } from "react-router";
import "./Blogdetails.css";
const BlogDetails = ({ setData }) => {
  // Filter the data array to get the item with the matching ID
  let location = useLocation();
  console.log(location);
  const matchedItem = location.state.state.data.find(
    (item) => item.id === location.state.state.id
  );

  if (matchedItem) {
    console.log("confirm");
    return (
      <div className="details">
        <div key={matchedItem.id}>
          <h3> PublisherName : {matchedItem.author.displayName}</h3>
          <br />
          <h1>Title:{matchedItem.title}</h1>
          <br />
          <p> publish: {matchedItem.published}</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            veritatis in repudiandae obcaecati nesciunt laboriosam optio sint
            quia ad incidunt temporibus doloremque consequuntur placeat! Officia
            illum, blanditiis commodi voluptatum, pariatur dignissimos unde
            distinctio sapiente exercitationem adipisci consectetur voluptatibus
            ipsum tempora nam placeat fuga soluta quasi. Odit repellat ut
            placeat corporis pariatur, accusamus, natus aut laborum repudiandae
            aliquid sit provident tempora facere ducimus quam commodi
            repellendus. Sequi earum harum inventore voluptas? Nulla laboriosam,
            dolore, maiores laborum ducimus amet dolores fuga illo, repudiandae
            aliquid pariatur ut ad porro! Ipsum, optio ullam corrupti, fuga odio
            vel unde veritatis nihil vero, similique a recusandae.
          </p>
          <br />
          <h5>Kind{matchedItem.kind}</h5>
          <br />
        </div>
      </div>
    );
  } else {
    console.log("not confirm");
    return (
      <div>
        {/* Render content when ID does not match */}
        <p>No matching ID found</p>
      </div>
    );
  }

  // return (
  //   <div className="bg-black text-white text-center w-[100vw] h-[100vw]">
  //     <h1>{postId}</h1>
  //     <h1></h1>
  //   </div>
  // );
};
export default BlogDetails;
