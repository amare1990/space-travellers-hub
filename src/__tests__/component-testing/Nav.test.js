import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../../pages/Nav';
import store from '../../redux/configureStore';

test('Render Navbar', () => {
  const renderNavbar = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(renderNavbar).toMatchSnapshot();
});
