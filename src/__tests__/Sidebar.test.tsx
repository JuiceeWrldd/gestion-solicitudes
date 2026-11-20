import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Sidebar, type ItemMenu } from '../app/components/dashboard/Sidebar';

const items: ItemMenu[] = [
  { id: 'inicio', label: 'Inicio', icon: null },
  { id: 'nueva', label: 'Nueva solicitud', icon: null },
  { id: 'perfil', label: 'Perfil', icon: null },
];

const mostrar = (onSeleccionar = vi.fn(), onCerrarSesion = vi.fn()) =>
  render(
    <Sidebar items={items} activo="nueva" nombre="Ana Gómez" rolTexto="Sistemas" onSeleccionar={onSeleccionar} onCerrarSesion={onCerrarSesion} />
  );

describe('Sidebar', () => {
  it('resalta solo la sección en la que estás', () => {
    mostrar();

    const actual = screen.getByRole('button', { name: 'Nueva solicitud' });
    expect(actual).toHaveAttribute('aria-current', 'page');
    expect(actual).toHaveClass('bg-white/20');
    expect(screen.getByRole('button', { name: 'Inicio' })).not.toHaveAttribute('aria-current');
    expect(screen.getByRole('button', { name: 'Inicio' })).not.toHaveClass('bg-white/20');
  });

  it('muestra el nombre, su inicial y el rol', () => {
    mostrar();

    expect(screen.getByText('Ana Gómez')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('Sistemas')).toBeInTheDocument();
  });

  it('avisa qué sección se eligió y cuándo cerrar sesión', () => {
    const onSeleccionar = vi.fn();
    const onCerrarSesion = vi.fn();
    mostrar(onSeleccionar, onCerrarSesion);

    fireEvent.click(screen.getByRole('button', { name: 'Perfil' }));
    fireEvent.click(screen.getByRole('button', { name: /Cerrar Sesión/ }));

    expect(onSeleccionar).toHaveBeenCalledWith('perfil');
    expect(onCerrarSesion).toHaveBeenCalled();
  });
});
