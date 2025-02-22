import { MdSupportAgent } from 'react-icons/md';
import img from '../assets/details.jpg';
import { GiDeliveryDrone } from "react-icons/gi";
import { BiCheckShield } from 'react-icons/bi';

const About = () => {
  return (
    <div style={{padding: '0 10px'}}>
      <h1 style={{
        maxWidth: '80%',
        margin: '0 auto 40px',
        fontSize: '2rem',
        fontWeight: "700",
        textTransform: 'uppercase',
      }}>
        About Page
      </h1>

      {/* Responsive Image */}
      <img src={img} alt="" style={{
        width: "100%",
        height: 'auto',
        maxHeight: '550px',
        objectFit: 'cover'
      }} />

      {/* Content */}
      <div style={{ maxWidth: '80%', margin: '0 auto', marginTop: '50px' }}>

        {/* OUR STORY */}
        <div style={{ margin: '40px 0' }}>
          <h2 style={{ fontSize: '26px', fontWeight: "500", textTransform: 'uppercase' }}>OUR STORY</h2>
          <h3 style={{ fontSize: '16px', fontWeight: "500", margin: '20px 0', lineHeight: '30px' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '30px', textAlign: 'justify' }}>
            Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
          </p>

          {/* Our Mission & Vision */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '30px',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '10px' }}>Our Mission</h2>
              <p style={{ fontSize: '14px', lineHeight: '30px' }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '10px' }}>Our Vision</h2>
              <p style={{ fontSize: '14px', lineHeight: '30px' }}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        {/* The Company Section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {/* Image */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img src={img} alt="" style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover'
            }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '10px' }}>The Company</h2>
            <p style={{ fontSize: '14px', lineHeight: '30px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.
            </p>
          </div>
        </div>

        {/* Customer Service Section */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          margin: '50px 0',
          textAlign: 'center'
        }}>
          <div style={{
            flex: '1 1 250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <GiDeliveryDrone style={{ fontSize: '52px' }} />
            <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Fast And Free Delivery</h2>
            <p style={{ fontSize: '15px', color: '#767676' }}>Free delivery for all orders over $140</p>
          </div>

          <div style={{
            flex: '1 1 250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <MdSupportAgent style={{ fontSize: '52px' }} />
            <h2 style={{ fontSize: '16px', fontWeight: '500' }}>24/7 Customer Support</h2>
            <p style={{ fontSize: '15px', color: '#767676' }}>Friendly 24/7 customer support</p>
          </div>

          <div style={{
            flex: '1 1 250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <BiCheckShield style={{ fontSize: '52px' }} />
            <h2 style={{ fontSize: '16px', fontWeight: '500' }}>Money Back Guarantee</h2>
            <p style={{ fontSize: '15px', color: '#767676' }}>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
