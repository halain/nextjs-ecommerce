import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { UiContext } from '@/context';


import {AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  SearchOutlined,
  IconButton,
  ShoppingCartOutlined,
  Badge,
  Typography,
  Input,
  InputAdornment,
  ClearOutlined} from './material'




export const Navbar = () => {

const { asPath, push } =  useRouter();
const { toggleSideMenu } = useContext(UiContext);

const [searchTerm, setSearchTerm] = useState('');
const [isSearchVisible, setIsSearchVisible] = useState(false)

const onSearchTerm = () => {
    if( searchTerm.trim().length === 0 ) return;
    push(`/search/${ searchTerm }`);
}


  return (
      <AppBar>
        <Toolbar>
          <NextLink href='/' passHref legacyBehavior>
            <Link display='flex' alignItems='center' >
              <Typography variant='h6'>Teslo |</Typography>
              <Typography sx={{ ml: 0.5}}>Shop</Typography>
            </Link>
          </NextLink>

          <Box sx={{ flex: 1}}/>

          <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                className='fadeIn'>
            <NextLink href='/category/men' passHref legacyBehavior>
              <Link>
                <Button color={ asPath === '/category/men' ? 'primary' : 'info' }>Hombres</Button>
              </Link>
            </NextLink>
            <NextLink href='/category/women' passHref legacyBehavior>
              <Link>
                <Button color={ asPath === '/category/women' ? 'primary' : 'info' } >Mujeres</Button>
              </Link>
            </NextLink>
            <NextLink href='/category/kid' passHref legacyBehavior>
              <Link>
                <Button color={ asPath === '/category/kid' ? 'primary' : 'info' } >Niños</Button>
              </Link>
            </NextLink>
          </Box>

          <Box sx={{ flex: 1}}/>

          {/* Pantallas grandes */}
          {
            isSearchVisible 
            ? (
              <Input
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                autoFocus
                className='fadeIn'
                value={ searchTerm }
                onChange={ ( e ) => setSearchTerm(e.target.value) }
                onKeyUp={ (e) => e.key === 'Enter' && onSearchTerm() }
                type='text'
                placeholder="Buscar..."
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={ () => setIsSearchVisible(false) }
                        >
                          <ClearOutlined />
                        </IconButton>
                    </InputAdornment>
                }
            />
            )
            : (
              <IconButton onClick={ () => setIsSearchVisible(true) } 
                          sx={{ display: { xs: 'none', sm: 'flex' } }}
                          className='fadeIn'>
                <SearchOutlined/>
              </IconButton>
            )
          }
          

          {/* Pantallas pequeñas */}
          <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={ toggleSideMenu }>
            <SearchOutlined/>
          </IconButton>


          <NextLink href='/cart' passHref legacyBehavior>
              <Link >
                <IconButton>
                  <Badge badgeContent={2} color="secondary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Link>
          </NextLink>

          <Button onClick={ toggleSideMenu }>
            Menu
          </Button>

            

        </Toolbar>
      </AppBar>
  )
}
