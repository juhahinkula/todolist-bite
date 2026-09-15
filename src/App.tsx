import TodoList from './components/TodoList'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              My TODOS
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoList />
      </Container>
    </>
  )
}

export default App
