import React from 'react';
import Insta1 from '../../images/insta1.jpg';
import Insta2 from '../../images/insta2.jpg';
import Insta3 from '../../images/insta3.jpg';
import Insta4 from '../../images/insta4.jpg';

function Insta() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          color: 'var(--gray-scale-title-active, #000)',
          fontFeatureSettings: 'clig off, liga off',
          fontFamily: 'Tenor Sans',
          fontSize: '21px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '90px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          margin: '0'
        }}>
          FOLLOW US
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" viewBox="0 0 25 24" fill="none">
          <path d="M8.18 1.43994C4.73959 1.43994 1.94 4.23953 1.94 7.67994V16.3199C1.94 19.7603 4.73959 22.5599 8.18 22.5599H16.82C20.2604 22.5599 23.06 19.7603 23.06 16.3199V7.67994C23.06 4.23953 20.2604 1.43994 16.82 1.43994H8.18ZM8.18 2.39994H16.82C19.7415 2.39994 22.1 4.75843 22.1 7.67994V16.3199C22.1 19.2415 19.7415 21.5999 16.82 21.5999H8.18C5.25849 21.5999 2.9 19.2415 2.9 16.3199V7.67994C2.9 4.75843 5.25849 2.39994 8.18 2.39994ZM18.26 5.27994C18.0054 5.27994 17.7612 5.38108 17.5812 5.56112C17.4011 5.74115 17.3 5.98533 17.3 6.23994C17.3 6.49455 17.4011 6.73873 17.5812 6.91876C17.7612 7.0988 18.0054 7.19994 18.26 7.19994C18.5146 7.19994 18.7588 7.0988 18.9388 6.91876C19.1189 6.73873 19.22 6.49455 19.22 6.23994C19.22 5.98533 19.1189 5.74115 18.9388 5.56112C18.7588 5.38108 18.5146 5.27994 18.26 5.27994ZM12.5 6.71994C9.58962 6.71994 7.22 9.08956 7.22 11.9999C7.22 14.9103 9.58962 17.2799 12.5 17.2799C15.4104 17.2799 17.78 14.9103 17.78 11.9999C17.78 9.08956 15.4104 6.71994 12.5 6.71994ZM12.5 7.67994C14.8916 7.67994 16.82 9.60839 16.82 11.9999C16.82 14.3915 14.8916 16.3199 12.5 16.3199C10.1084 16.3199 8.18 14.3915 8.18 11.9999C8.18 9.60839 10.1084 7.67994 12.5 7.67994Z" fill="#333333"/>
        </svg>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <div style={{
          background: `url(${Insta1}), lightgray 0px -6.092px / 100% 173.333% no-repeat`,
          width: '164px',
          height: '164px',
          flexShrink: '0',
          marginRight: '10px',
          overflow: 'hidden',
        }}>
          <h2 style={{
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: 'Tenor Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '1px',
            margin: '0',
            marginTop: '150px',
          }}>
            @mia
          </h2>
        </div>
        <div style={{
          background: `url(${Insta2}), lightgray 0px -6.092px / 100% 173.333% no-repeat`,
          width: '164px',
          height: '164px',
          flexShrink: '0',
          marginLeft: '10px',
          overflow: 'hidden',
        }}>
          <h2 style={{
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: 'Tenor Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '1px',
            margin: '0',
            marginTop: '150px',
          }}>
            @_jihyn
          </h2>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <div style={{
          background: `url(${Insta3}), lightgray 0px -6.092px / 100% 173.333% no-repeat`,
          width: '164px',
          height: '164px',
          flexShrink: '0',
          marginRight: '10px',
          overflow: 'hidden',
        }}>
          <h2 style={{
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: 'Tenor Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '1px',
            margin: '0',
            marginTop: '150px',
          }}>
            @mia
          </h2>
        </div>
        <div style={{
          background: `url(${Insta4}), lightgray 0px -6.092px / 100% 173.333% no-repeat`,
          width: '164px',
          height: '164px',
          flexShrink: '0',
          marginLeft: '10px',
          overflow: 'hidden',
        }}>
          <h2 style={{
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: 'Tenor Sans',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '1px',
            margin: '0',
            marginTop: '150px',
          }}>
            @maaz
          </h2>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" style={{ margin: '0 10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M22.9 6.33332C22.1344 6.67332 21.312 6.90212 20.4488 7.00532C21.3304 6.47732 22.0064 5.64132 22.3248 4.64452C21.5008 5.13332 20.5872 5.48852 19.6144 5.68052C18.836 4.85092 17.7272 4.33252 16.5 4.33252C14.1432 4.33252 12.2328 6.24372 12.2328 8.59972C12.2328 8.93412 12.2712 9.26052 12.3432 9.57172C8.7968 9.39412 5.6528 7.69492 3.5472 5.11252C3.1808 5.74292 2.9704 6.47572 2.9704 7.25892C2.9704 8.73892 3.7232 10.0453 4.868 10.8101C4.1688 10.7877 3.5104 10.5957 2.9352 10.2765C2.9352 10.2949 2.9352 10.3117 2.9352 10.3301C2.9352 12.3981 4.4056 14.1229 6.3584 14.5141C6.0008 14.6117 5.6232 14.6637 5.2336 14.6637C4.9592 14.6637 4.6912 14.6365 4.4312 14.5877C4.9744 16.2829 6.5504 17.5173 8.4176 17.5517C6.9576 18.6965 5.1176 19.3789 3.1176 19.3789C2.7736 19.3789 2.4336 19.3589 2.0992 19.3189C3.988 20.5293 6.2304 21.2357 8.6408 21.2357C16.4904 21.2357 20.7816 14.7333 20.7816 9.09412C20.7816 8.90932 20.7776 8.72532 20.7696 8.54212C21.604 7.93972 22.328 7.18852 22.9 6.33332Z" fill="#333333"/>
</svg>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" style={{ margin: '0 10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M8.49844 3.18372C5.41124 3.18372 2.9 5.69728 2.9 8.78528V16.7853C2.9 19.8725 5.41356 22.3837 8.50156 22.3837H16.5016C19.5888 22.3837 22.1 19.8702 22.1 16.7822V8.78215C22.1 5.69495 19.5864 3.18372 16.4984 3.18372H8.49844ZM18.1 6.38372C18.5416 6.38372 18.9 6.74212 18.9 7.18372C18.9 7.62532 18.5416 7.98372 18.1 7.98372C17.6584 7.98372 17.3 7.62532 17.3 7.18372C17.3 6.74212 17.6584 6.38372 18.1 6.38372ZM12.5 7.98372C15.1472 7.98372 17.3 10.1365 17.3 12.7837C17.3 15.4309 15.1472 17.5837 12.5 17.5837C9.8528 17.5837 7.7 15.4309 7.7 12.7837C7.7 10.1365 9.8528 7.98372 12.5 7.98372ZM12.5 9.58372C11.6513 9.58372 10.8374 9.92086 10.2373 10.521C9.63714 11.1211 9.3 11.935 9.3 12.7837C9.3 13.6324 9.63714 14.4463 10.2373 15.0465C10.8374 15.6466 11.6513 15.9837 12.5 15.9837C13.3487 15.9837 14.1626 15.6466 14.7627 15.0465C15.3629 14.4463 15.7 13.6324 15.7 12.7837C15.7 11.935 15.3629 11.1211 14.7627 10.521C14.1626 9.92086 13.3487 9.58372 12.5 9.58372Z" fill="#333333"/>
</svg>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" style={{ margin: '0 10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.5 3.98364C9.1512 3.98364 4.80469 4.82271 4.80469 4.82271L4.79375 4.83521C3.26853 5.07913 2.1 6.38974 2.1 7.98364V12.7836V12.7852V17.5836V17.5852C2.10149 18.3464 2.37429 19.0822 2.86944 19.6604C3.36458 20.2386 4.04962 20.6213 4.80156 20.7399L4.80469 20.7446C4.80469 20.7446 9.1512 21.5852 12.5 21.5852C15.8488 21.5852 20.1953 20.7446 20.1953 20.7446L20.1969 20.743C20.9496 20.6247 21.6355 20.2417 22.131 19.6628C22.6265 19.0839 22.8992 18.3472 22.9 17.5852V17.5836V12.7852V12.7836V7.98364C22.8989 7.22215 22.6262 6.48601 22.1311 5.90749C21.6359 5.32897 20.9506 4.946 20.1984 4.82739L20.1953 4.82271C20.1953 4.82271 15.8488 3.98364 12.5 3.98364ZM10.1 9.10239L16.5 12.7836L10.1 16.4649V9.10239Z" fill="#333333"/>
</svg>
        </svg>
        - Maaz Khan <br />
            maazkh2700@gmail.com
        
      </div>
    </>
  );
}

export default Insta;
