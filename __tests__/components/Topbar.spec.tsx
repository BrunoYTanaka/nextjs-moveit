import React from 'react'
import { render } from '@testing-library/react'
import Topbar from '../../src/components/TopBar'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))

describe('Topbard', () => {
  it('should be render topbar', () => {
    // Object.defineProperty(window, 'innerWidth', {
    //   writable: true,
    //   configurable: true,
    //   value: 720,
    // })

    // window.dispatchEvent(new Event('resize'))

    const { getByAltText, getByRole } = render(<Topbar />)

    const logoImg = getByAltText('logo')
    const homeImg = getByAltText('home')
    const leaderImg = getByAltText('ranking_leaders')
    const logoutButton = getByRole('button')

    expect(logoImg).not.toBeNull()
    expect(homeImg).not.toBeNull()
    expect(leaderImg).not.toBeNull()
    expect(logoutButton).not.toBeNull()
  })
})
