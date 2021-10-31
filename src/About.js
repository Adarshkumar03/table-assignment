import Header from "./Header";
import {useState, useEffect} from "react";

const About = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        getData("Adarshkumar03");
        async function getData(user) {
          const response = await fetch(`https://api.github.com/users/${user}`);
          const data = await response.json();
          setProfile(data);
        }
      }, []);
    return (
      <div>
        <Header/>
        <div id="gradient"></div>
{profile&&<div id="card">
  <img src={profile.avatar_url}/>
  <h2>{profile.name}</h2>
  <p>{profile.email?profile.email:"NaN"}</p>
  <p>{profile.company?profile.company:"NaN"}</p>
  <span className="left bottom">Followers: {profile.followers}</span>
  <span className="right bottom">Following: {profile.following}</span>
</div>
}
      </div>
    );
  }
  
  export default About;