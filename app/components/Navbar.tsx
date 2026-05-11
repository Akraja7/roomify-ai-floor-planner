import React from 'react'
import {Box} from "lucide-react";
import Button from './ui/Button';
import { useOutletContext } from 'react-router';
const Navbar = () => {
  const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>()
    const handleAuthCLick = async () => {
        if(isSignedIn){ 
          try {
            await signOut();
          } catch (error) {
            console.error(`Puter Sign out failed: ${error}`);
          }
          return
        };
        try {
          await signIn();
        } catch (error) {
          console.error(`Puter Sign in failed: ${error}`);
        }
    }
  return (
    <header className='navbar'>
      <nav className='inner'>
        <div className='left'>
            <div className='brand'>
                <Box className="logo"/>
                <span className='name'>Roomify</span>
            </div>
            <ul className='links'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/Community">Community</a></li>
                <li><a href="/Enterprise">Enterprise</a></li>
            </ul>
        </div>
        <div className='actions'>
          { isSignedIn ?(
            <>
            <span className='greeting'>{userName ? `Hi ${userName}`:'Signed In'}</span>
            <Button size='sm' onClick={handleAuthCLick} className='btn'>
              Logout
            </Button>
            </>
          ): (
            <>
            <Button size='sm' onClick={handleAuthCLick} variant="ghost" className='login'>
              Login
            </Button>
            <a href="#upload" className='cta'>
              Get Started
            </a>
            </>
          )}
            
        </div>
      </nav>
    </header>
  )
}

export default Navbar
