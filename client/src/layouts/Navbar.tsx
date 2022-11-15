import React from 'react'
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { PageItem, pageList } from '../pages/pageList';
import { Link } from 'react-router-dom';

type NavbarProps={
  currentPage:PageItem
}
export const Navbar = ({currentPage}:NavbarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 , paddingBottom:"50px"}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, width: "50px" }}
          >
            {currentPage.getIcon()}
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {currentPage.pageName}
            </Typography>
            {
              Object.values(pageList).map((page:PageItem)=>
                 page===currentPage?<Button disabled color="inherit">{page.pageName}</Button>: <Button color="inherit" component={Link} to={page.url}>{page.pageName}</Button>
              )
            }

          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
