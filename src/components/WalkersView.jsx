import React, { useState } from 'react';
import { PhoneCall, MessageCircleIcon, ThumbsDown, ThumbsUp } from 'lucide-react';
import './WalkersView.css';

export default function WalkersView({ language }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});


  const walkers = [
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://media.istockphoto.com/id/2168965196/photo/photo-of-nice-pretty-young-girl-toothy-smile-look-away-fresh-air-street-outdoors.jpg?s=612x612&w=is&k=20&c=ZvmYfrLJSuMs-c7eWoHZkG5WE0YSKaYJIocTr-1Rt3U=',
      nearby:'1km'
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp',
            nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Анна Иванова' : 'Anna Ivanova',
      rating: 4.7,
      walks: 450,
      specialties: language === 'bg' ? ['Тренировки', 'Социализация'] : ['Training', 'Socialization'],
      image: 'https://www.adobe.com/express/create/media_1ead9ff65c5551a5e6669cb8daa7479fa65097f38.png?width=750&format=png&optimize=medium' ,
        nearby:'400 m'
    },
    {
      name: language === 'bg' ? 'Иван Георгиев' : 'Ivan Georgiev',
      rating: 4.6,
      walks: 300,
      specialties: language === 'bg' ? ['Големи породи', 'Игри'] : ['Large breeds', 'Games'],
      image: 'https://img.freepik.com/photos-premium/gros-plan-beau-jeune-homme-barbu-elegant-heureux-marchant-exterieur-dans-rue_171337-117026.jpg?semt=ais_hybrid' ,
      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:b66a3bab-f175-4143-ab1d-01b49c43eb28/component?assetType=TEMPLATE&etag=ce6ac258907cbd222cca19fd81683811&revision=0&component_id=deec4266-ab7b-410b-b58a-ddc9d188d04d' ,
      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg' ,
      nearby:'300 m'
    },
    {
      name: language === 'bg' ? 'Анна Иванова' : 'Anna Ivanova',
      rating: 4.7,
      walks: 450,
      specialties: language === 'bg' ? ['Тренировки', 'Социализация'] : ['Training', 'Socialization'],
      image: 'https://i.pinimg.com/736x/c2/82/04/c28204c26e5644246b0ce1eedff2b1b1.jpg' ,      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Иван Георгиев' : 'Ivan Georgiev',
      rating: 4.6,
      walks: 300,
      specialties: language === 'bg' ? ['Големи породи', 'Игри'] : ['Large breeds', 'Games'],
      image: 'https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg' ,      nearby:'200 m'
    },
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp' ,      nearby:'100 m'
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://thumbs.dreamstime.com/b/happy-businessman-22407259.jpg' ,      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Анна Иванова' : 'Anna Ivanova',
      rating: 4.7,
      walks: 450,
      specialties: language === 'bg' ? ['Тренировки', 'Социализация'] : ['Training', 'Socialization'],
      image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2pvYjEwNjAtMTQucG5n.png' ,      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Иван Георгиев' : 'Ivan Georgiev',
      rating: 4.6,
      walks: 300,
      specialties: language === 'bg' ? ['Големи породи', 'Игри'] : ['Large breeds', 'Games'],
      image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png' ,      nearby:'300 m'
    }, {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_1280.jpg' ,      nearby:'1 km'
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg' ,      nearby:'2 km'
    },
    {
      name: language === 'bg' ? 'Анна Иванова' : 'Anna Ivanova',
      rating: 4.7,
      walks: 450,
      specialties: language === 'bg' ? ['Тренировки', 'Социализация'] : ['Training', 'Socialization'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHTIiWfCuQ1Yax-KPSg6_J7EQOFtHjdqzR0idax0vGQwKPnOyIOrdi9h_nR94e5XfPUs&usqp=CAU' ,      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Иван Георгиев' : 'Ivan Georgiev',
      rating: 4.6,
      walks: 300,
      specialties: language === 'bg' ? ['Големи породи', 'Игри'] : ['Large breeds', 'Games'],
      image: 'https://img.freepik.com/free-psd/portrait-handsome-teenager-boy-isolated-white-background_1142-53214.jpg' ,      nearby:'100 m'
    },
    {
      name: language === 'bg' ? 'Мария Петрова' : 'Maria Petrova',
      rating: 4.9,
      walks: 500,
      specialties: language === 'bg' ? ['Големи породи', 'Тренировки'] : ['Large breeds', 'Training'],
      image: 'https://www.shutterstock.com/image-photo/need-picture-lady-facebook-profile-600nw-2534800341.jpg' ,      nearby:'50 m'
    },
    {
      name: language === 'bg' ? 'Георги Димитров' : 'George Dimitrov',
      rating: 4.8,
      walks: 350,
      specialties: language === 'bg' ? ['Малки породи', 'Игри'] : ['Small breeds', 'Games'],
      image: 'https://img.freepik.com/free-psd/portrait-young-man-black-t-shirt-isolated-white-background_1142-60715.jpg' ,      nearby:'250 m'
    },
    {
      name: language === 'bg' ? 'Анна Иванова' : 'Anna Ivanova',
      rating: 4.7,
      walks: 450,
      specialties: language === 'bg' ? ['Тренировки', 'Социализация'] : ['Training', 'Socialization'],
      image: 'https://st2.depositphotos.com/1054848/6561/i/450/depositphotos_65612497-stock-photo-happy-mature-woman.jpg' ,      nearby:'500 m'
    },
    {
      name: language === 'bg' ? 'Иван Георгиев' : 'Ivan Georgiev',
      rating: 4.6,
      walks: 300,
      specialties: language === 'bg' ? ['Големи породи', 'Игри'] : ['Large breeds', 'Games'],
      image: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' ,      nearby:'500 m'
    }
  ];

  const filteredWalkers = walkers.filter(walker =>
    walker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    // Remove dislike if exists
    if (dislikes[index]) {
      setDislikes(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };

  const handleDislike = (index) => {
    setDislikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    // Remove like if exists
    if (likes[index]) {
      setLikes(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };

 
  
  return (
    <div className="walkers-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder={language === 'bg' ? 'Търсене на разходчици наблизо...' : 'Search for walkers nearby...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredWalkers.map((walker, index) => (
        <div key={index} className="walker-card">
          <div className="avatar">
            <img className="avatar-icon" src={walker.image} alt="person" />
          </div>
          <div>
            <h3 className="walker-name">{walker.name}</h3>
            <div className="walker-info">
              <span>⭐ {walker.rating}</span>
              <span>• {walker.walks}+ {language === 'bg' ? 'разходки' : 'walks'}</span>
              <span>• {language === 'bg' ? 'от мен на' : 'from me'} {walker.nearby}</span>
            </div>
            <div className="walker-specialties">
              {walker.specialties.map((specialty, i) => (
                <span key={i} className="specialty-badge">
                  {specialty}
                </span>
              ))}
            </div>
            <button className="reserve-button">
              {language === 'bg' ? 'Резервирай' : 'Reserve'}
            </button>
            <PhoneCall size={20} className="icon" title={language === 'bg' ? 'Телефон' : 'Phone'} />
            <MessageCircleIcon size={20} className="icon" title="Viber" />
         
            <button 
                  onClick={() => handleLike(index)}
                  className={`interaction-btn icon ${likes[index] ? 'active liked' : ''}`}
                  title={language === 'bg' ? 'Харесай' : 'Like'}
                >
                  <ThumbsUp size={24} fill={likes[index] ? 'currentColor' : 'none'} />
                </button>

                <button 
                  onClick={() => handleDislike(index)}
                  className={`interaction-btn icon ${dislikes[index] ? 'active disliked' : ''}`}
                  title={language === 'bg' ? 'Не харесвай' : 'Dislike'}
                >
                    <ThumbsDown size={24} fill={dislikes[index] ? 'currentColor' : 'none'} />
                  </button>
            
          </div>
          
        </div>
      ))}
      
    </div>
  );
}
