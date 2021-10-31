import Header from "./Header";
import {useState, useEffect} from "react";

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getData("taichi-dev");
    getData("Adarshkumar03");
    getData("ota-meshi");
    getData("edenhill");
    getData("shivammathur");
    async function getData(user) {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();
      setProfiles([...profiles,data]);
    }
  }, []);
  return (
    <div className="home">
      <Header/>
     <table>
        <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Company</th>
    <th>Followers</th>
    <th>Following</th>
  </tr>
  {
    profiles.map((profile)=>{
      return <tr>
    <td>{profile.name}</td>
    <td>{profile.email}</td>
    <td>{profile.company}</td>
    <td>{profile.followers}</td>
    <td>{profile.following}</td>
  </tr> 
    })
  }
  </table>
    </div>  	
  );
}

export default Home;
