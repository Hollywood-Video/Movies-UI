import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../Pages/LoginPage.tsx'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})