import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ForgotPasswordScreen } from '../app/components/ForgotPasswordScreen';

describe('Prueba 2: Validación del Formulario de Recuperación de Contraseña', () => {
  it('Debe renderizar el título, el input de correo y el botón sin lanzar excepciones', () => {
    render(<ForgotPasswordScreen onNavigateToLogin={vi.fn()} />);

    expect(screen.getByText(/Recuperar contraseña/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/correo@institucion.co/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar enlace de recuperación/i })).toBeInTheDocument();
  });
});