import { test, expect } from '@playwright/test';

test('puede navegar entre páginas y ver detalles', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Comprueba que hay pokémons en la lista
  await expect(page.locator('.pokemon-list li')).toHaveCountGreaterThan(0);

  // Haz clic en el primer Pokémon
  await page.locator('.pokemon-list li a').first().click();

  // Comprueba que se muestra el detalle
  await expect(page.locator('.pokedex-detail')).toBeVisible();
  await expect(page.locator('.pokedex-detail h1')).not.toBeEmpty();

  // Vuelve atrás
  await page.locator('.pokedex-btn', { hasText: 'Tornar al llistat' }).click();

  // Comprueba que vuelve a la lista
  await expect(page.locator('.pokemon-list')).toBeVisible();
});