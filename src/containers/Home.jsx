import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sidebar } from '../components'
import useAuthStore from '../store/authStore';
import Posts from './Posts'

const Home = () => {

  const [user, setUser] = useState();
  const scrollRef = useRef(null);

  const { userProfile } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  })


  return (

    <div className="flex">
      <div className="h-[92vh]  ">
        <Sidebar />
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          {/*<Route path="/user-profile/:userId" element={<UserProfile />} />*/}
          <Route path="/*" element={<Posts user={user && user} />} />
        </Routes>
      </div>
    </div>

  )
}

export default Home