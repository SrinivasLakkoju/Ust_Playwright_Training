import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const create_booking = JSON.parse(fs.readFileSync('./data/createBooking.json', 'utf-8'));
const update_booking = JSON.parse(fs.readFileSync('./data/updateBooking.json', 'utf-8'));
const auth_data = JSON.parse(fs.readFileSync('./data/auth.json', 'utf-8'));

const BASE_URL = 'https://restful-booker.herokuapp.com';

let token: string;
let bookingId: number;
test.describe.serial('Restful Booker API End-to-End Tests', () => {

  test.beforeAll('Generate Auth Token', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/auth`, {
      data: auth_data
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    token = body.token;
    
  });

  test('Create a Booking', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/booking`, {
      data: create_booking
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    bookingId = body.bookingid;
    expect(bookingId).toBeGreaterThan(0);
  });

  test('Update the Booking', async ({ request }) => {
    const res = await request.put(`${BASE_URL}/booking/${bookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`,
      },
      data: update_booking
    });

    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.firstname).toBe('Srinivas');
    expect(body.depositpaid).toBe(false);
  });

  test('Verify Updated Booking', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/booking/${bookingId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.firstname).toBe('Srinivas');
    expect(body.additionalneeds).toBe('Breakfast');
  });

  test('Delete the Booking', async ({ request }) => {
    const res = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    expect(res.status()).toBe(201);
  });

  test('Verify Booking is Deleted', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/booking/${bookingId}`);
    expect(res.status()).toBe(404); 
  });

});
    