import { Router } from 'express';
import { db } from '~/server/db';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const employees = await db.employee.findMany({
      include: {
        devices: true,
      },
    });
    return res.status(200).json(employees);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to fetch employees' });
  }
});

router.post('/', async (req, res) => {
  const { name, role } = req.body;
  try {
    const employee = await db.employee.create({
      data: { name, role },
    });
    return res.status(201).json(employee);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to create employee' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;
  try {
    const updatedEmployee = await db.employee.update({
      where: { id: Number(id) },
      data: { name, role },
    });
    return res.status(200).json(updatedEmployee);
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to update employee' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.employee.delete({
      where: { id: Number(id) },
    });
    return res.status(204).send(); // No content
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to delete employee' });
  }
});

router.get('/count', async (_req, res) => {
  try {
    const count = await db.employee.count()
    return res.status(200).json({ count })
  } catch (_error) {
    return res.status(500).json({ message: 'Failed to fetch employee count' })
  }
})

export default router;
