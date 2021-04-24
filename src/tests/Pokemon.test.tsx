import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import axiosMock from 'axios'

import Pokemon from '../components/Pokemon'

beforeEach(cleanup)

it('Fetches and renders data', async () => {
  const name = 'charizard'
  axiosMock.get.mockResolvedValueOnce({
    data: {
      name,
      sprites: {
        front_shiny: '',
      },
    },
  })

  const { getByText, getByAltText } = render(<Pokemon name={name} />)
  expect(getByText('Loading...')).not.toBeNull()

  await waitFor(() => {
    getByText(name)
    getByAltText(name)
  })

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
})
