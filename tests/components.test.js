import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import AddNameForm from '../components/AddNameForm';
import NamesList from '../components/NamesList';

describe('AddNameForm component', async assert => {
  const word = 'Add';
  const $ = render(<AddNameForm />);
  const contains = match($('.addname_button').html().trim());
  assert({
    given: '',
    should: 'Render add Word Component',
    actual: contains(word),
    expected: `Add`
  });
});
