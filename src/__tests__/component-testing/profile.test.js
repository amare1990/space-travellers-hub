import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Profile from '../../pages/Profile';
import store from '../../redux/configureStore';

test('Render My profile', () => {
  const renderProfile = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(renderProfile).toMatchSnapshot();
});
