import { useState } from 'react';
import img from '../assets/details.jpg';

const Details = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '0 10px' }}>
      {/* Product Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        {/* Image */}
        <div style={{ flex: 1, minWidth: '350px' }}>
          <img
            src={img}
            alt="Product"
            style={{
              width: '100%',
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <h2 style={{ fontSize: '26px', fontWeight: '500' }}>Hub Accent Mirror</h2>
          <h3 style={{ fontSize: '22px', fontWeight: '500', color: '#555' }}>$17</h3>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '500px',
            }}
          >
            Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.
          </p>

          {/* Count Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #000', borderRadius: '5px' }}>
              <button
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
                style={{
                  padding: '10px 15px',
                  background: 'black',
                  color: 'white',
                  cursor: 'pointer',
                  borderRadius: '5px 0 0 5px',
                }}
              >
                -
              </button>
              <span style={{ fontSize: '16px', fontWeight: '500', minWidth: '20px', textAlign: 'center' }}>{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                style={{
                  padding: '10px 15px',
                  background: 'black',
                  color: 'white',
                  cursor: 'pointer',
                  borderRadius: '0 5px 5px 0',
                }}
              >
                +
              </button>
            </div>

            <button
              style={{
                padding: '10px 40px',
                background: 'black',
                color: 'white',
                cursor: 'pointer',
                border: '1px solid #000',
                borderRadius: '5px',
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div style={{ maxWidth: '80%', margin: '50px auto 0' }}>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: '500',
            textTransform: 'uppercase',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          Description
        </h2>
        <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '15px' }}>
          Sed do eiusmod tempor incididunt ut labore
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        {/* Lists */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          <div style={{ textAlign: 'left', maxWidth: '400px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '15px' }}>
              Why choose this product?
            </h2>
            <ul
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                paddingLeft: '20px',
                listStyle: 'outside',
              }}
            >
              <li>Created with cotton fabric, soft and smooth</li>
              <li>Simple, configurable (e.g., size, color), bundled</li>
              <li>Downloadable/Digital Products, Virtual Products</li>
            </ul>
          </div>

          <div style={{ textAlign: 'left', maxWidth: '400px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '15px' }}>
              Sample Number List
            </h2>
            <ol
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                paddingLeft: '20px',
                listStyle: 'outside',
                listStyleType: 'decimal',
              }}
            >
              <li>Create store-specific attributes on the fly</li>
              <li>Simple, configurable (e.g., size, color), bundled</li>
              <li>Downloadable/Digital Products, Virtual Products</li>
            </ol>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '5px' }}>Lining</h2>
          <p style={{ fontSize: '14px' }}>100% Polyester, Main: 100% Polyester.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
