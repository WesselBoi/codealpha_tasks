import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='min-h-screen bg-purpleBg'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 bg-gradient-to-br from-purpleBg to-darkerBg'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-goldish'>
            ShopEase E-Commerce
          </h1>
          <p className='text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12'>
            A modern, full-stack e-commerce platform built with the MERN stack, featuring secure authentication, state management, and responsive design.
          </p>
          
          {/* Tech Stack Badges */}
          <div className='flex flex-wrap gap-4 justify-center mb-8'>
            <span className='px-4 py-2 bg-goldish text-darkerBg rounded-full font-semibold flex items-center gap-2'>
              <span className='w-4 h-4 bg-darkerBg rounded-full'></span>
              MongoDB
            </span>
            <span className='px-4 py-2 bg-goldish text-darkerBg rounded-full font-semibold flex items-center gap-2'>
              <span className='w-4 h-4 bg-darkerBg rounded-full'></span>
              Express.js
            </span>
            <span className='px-4 py-2 bg-goldish text-darkerBg rounded-full font-semibold flex items-center gap-2'>
              <span className='w-4 h-4 bg-darkerBg rounded-full'></span>
              React.js
            </span>
            <span className='px-4 py-2 bg-goldish text-darkerBg rounded-full font-semibold flex items-center gap-2'>
              <span className='w-4 h-4 bg-darkerBg rounded-full'></span>
              Node.js
            </span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-6 text-goldish'>Project Overview</h2>
            <p className='text-xl text-white max-w-4xl mx-auto leading-relaxed'>
              ShopEase demonstrates modern web development practices with industry-standard features including secure authentication, real-time state management, and responsive design principles.
            </p>
          </div>
          
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-darkerBg' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>Frontend Architecture</h3>
              <p className='text-white/80'>React with Redux Toolkit for state management and React Router for navigation</p>
            </div>
            
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-darkerBg' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>Backend Infrastructure</h3>
              <p className='text-white/80'>Node.js with Express.js framework and MongoDB database integration</p>
            </div>
            
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-darkerBg' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-4'>Security Features</h3>
              <p className='text-white/80'>JWT authentication, password hashing, and secure cookie management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className='py-20 px-4 bg-gradient-to-br from-darkerBg to-purpleBg'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>Technology Stack</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Frontend Technologies */}
            <div className='bg-white rounded-2xl p-8 shadow-xl'>
              <h3 className='text-2xl font-bold mb-8 text-darkerBg flex items-center'>
                <span className='w-8 h-8 bg-lightPurple rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
                    <path fillRule='evenodd' d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z' clipRule='evenodd'></path>
                  </svg>
                </span>
                Frontend Technologies
              </h3>
              
              <div className='space-y-4'>
                {/* React */}
                <div className='flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors'>
                  <div className='w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.565-.465-.47-.92-.993-1.36-1.565z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>React.js</h4>
                    <p className='text-mediumBlue text-sm'>Component-based UI library with hooks</p>
                  </div>
                </div>

                {/* Redux Toolkit */}
                <div className='flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors'>
                  <div className='w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M16.634 16.504c.87-.075 1.543-.84 1.543-1.747a1.75 1.75 0 0 0-1.75-1.75c-.685 0-1.288.416-1.537 1.02l-2.89.777V5.25A2.25 2.25 0 0 0 9.75 3H6.25A2.25 2.25 0 0 0 4 5.25v13.5A2.25 2.25 0 0 0 6.25 21h3.5a2.25 2.25 0 0 0 2.25-2.25v-5.46l2.89-.777c.249-.067.458-.24.584-.463z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>Redux Toolkit</h4>
                    <p className='text-mediumBlue text-sm'>Modern Redux for state management</p>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div className='flex items-center p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors'>
                  <div className='w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>Tailwind CSS</h4>
                    <p className='text-mediumBlue text-sm'>Utility-first CSS framework</p>
                  </div>
                </div>

                {/* React Router */}
                <div className='flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors'>
                  <div className='w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>React Router</h4>
                    <p className='text-mediumBlue text-sm'>Client-side routing and navigation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className='bg-white rounded-2xl p-8 shadow-xl'>
              <h3 className='text-2xl font-bold mb-8 text-darkerBg flex items-center'>
                <span className='w-8 h-8 bg-mediumBlue rounded-full flex items-center justify-center mr-3'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z' clipRule='evenodd'></path>
                  </svg>
                </span>
                Backend Technologies
              </h3>
              
              <div className='space-y-4'>
                {/* Node.js */}
                <div className='flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'>
                  <div className='w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.137,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>Node.js</h4>
                    <p className='text-mediumBlue text-sm'>JavaScript runtime environment</p>
                  </div>
                </div>

                {/* Express.js */}
                <div className='flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
                  <div className='w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z' clipRule='evenodd'></path>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>Express.js</h4>
                    <p className='text-mediumBlue text-sm'>Fast web application framework</p>
                  </div>
                </div>

                {/* MongoDB */}
                <div className='flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors'>
                  <div className='w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'/>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>MongoDB</h4>
                    <p className='text-mediumBlue text-sm'>NoSQL document database</p>
                  </div>
                </div>

                {/* JWT Authentication */}
                <div className='flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors'>
                  <div className='w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd'></path>
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-bold text-darkerBg text-lg'>JWT Authentication</h4>
                    <p className='text-mediumBlue text-sm'>Secure token-based authentication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            
            {/* Secure Authentication */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Secure Authentication</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                JWT tokens, password hashing with bcrypt, and secure cookie management for user sessions.
              </p>
            </div>

            {/* State Management */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Redux State Management</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                Redux Toolkit for efficient state management with cart, authentication, and product data.
              </p>
            </div>

            {/* Responsive Design */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Responsive Design</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                Mobile-first design with Tailwind CSS ensuring perfect experience across all devices.
              </p>
            </div>

            {/* Shopping Cart */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Smart Cart System</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                Real-time cart management with quantity updates, price calculations, and persistent storage.
              </p>
            </div>

            {/* Product Management */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Product Catalog</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                Dynamic product listings with detailed pages, ratings, and comprehensive product information.
              </p>
            </div>

            {/* Payment Gateway (Coming Soon) */}
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-75'>
              <div className='w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z'></path>
                  <path fillRule='evenodd' d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-4 text-darkerBg'>Payment Gateway</h3>
              <p className='text-mediumBlue leading-relaxed text-sm'>
                Secure payment processing integration coming soon to complete the e-commerce experience.
              </p>
              <span className='inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full'>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className='py-20 px-4 bg-gradient-to-br from-darkerBg to-purpleBg'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>Project Statistics</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-darkerBg'>12+</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Technologies</h3>
              <p className='text-white/80'>Modern tech stack</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-darkerBg'>100%</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Responsive</h3>
              <p className='text-white/80'>Mobile-first approach</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-darkerBg'>JWT</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Secure</h3>
              <p className='text-white/80'>Token-based auth</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-goldish rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-darkerBg'>REST</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>API</h3>
              <p className='text-white/80'>Clean architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            Explore the Platform
          </h2>
          <p className='text-xl mb-8 text-white opacity-90'>
            Experience the features and functionality of this modern e-commerce platform built with cutting-edge technologies.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link 
              to='/products' 
              className='px-8 py-4 bg-white text-lightPurple font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Browse Products
            </Link>
            <a 
              href='https://github.com/your-github/shopease' 
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-lightPurple transition-all duration-300 transform hover:scale-105'
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About