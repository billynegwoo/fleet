import { Router } from 'express';
import { db } from '~/server/db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const devices = await db.device.findMany();
    return res.status(200).json(devices);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to fetch devices' });
  }
});

router.post('/', async (req, res) => {
  const { name, type, employeeId } = req.body;
  try {
    const device = await db.device.create({
      data: { name, type, employeeId },
    });
    return res.status(201).json(device);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to create device' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, type, employeeId } = req.body;
  try {
    const updatedDevice = await db.device.update({
      where: { id: Number(id) },
      data: { name, type, employeeId },
    });
    return res.status(200).json(updatedDevice);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to update device' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.device.delete({
      where: { id: Number(id) },
    });
    return res.status(204).send(); // No content
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to delete device' });
  }
});

export default router;
