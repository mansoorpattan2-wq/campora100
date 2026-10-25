import { PrismaClient, Role, ResourceStatus, BookingStatus, Priority, IssueStatus } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // 1. Departments
  const departments = [
    { code: 'CSE', name: 'Computer Science and Engineering' },
    { code: 'ECE', name: 'Electronics and Communication Engineering' },
    { code: 'EEE', name: 'Electrical and Electronics Engineering' },
    { code: 'Mechanical', name: 'Mechanical Engineering' },
    { code: 'Civil', name: 'Civil Engineering' },
    { code: 'Media', name: 'Media and Communications' },
    { code: 'Central', name: 'Central Administration' },
  ];

  for (const dept of departments) {
    await prisma.department.upsert({
      where: { code: dept.code },
      update: {},
      create: dept,
    });
  }

  const deptMap = await prisma.department.findMany().then(depts => 
    Object.fromEntries(depts.map(d => [d.code, d.id]))
  );

  // 2. Users
  const users = [
    {
      id: 'usr_student_01',
      email: 'student@resora.demo',
      name: 'Aryan Reddy',
      role: Role.STUDENT,
      rollNumber: 'CSE-2023-042',
      departmentId: deptMap['CSE'],
    },
    {
      id: 'usr_faculty_01',
      email: 'faculty@resora.demo',
      name: 'Dr. S. Rao',
      role: Role.FACULTY,
      departmentId: deptMap['CSE'],
    },
    {
      id: 'usr_admin_01',
      email: 'admin@resora.demo',
      name: 'Admin Desk',
      role: Role.ADMIN,
      departmentId: deptMap['Central'],
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  // 3. Resources
  const resources = [
    {
      id: 'res_01',
      name: 'AI/ML Lab',
      type: 'Lab',
      building: 'Block A',
      floor: 'Floor 2',
      capacity: 40,
      status: ResourceStatus.AVAILABLE,
      departmentId: deptMap['CSE'],
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      features: ['GPU Workstations', 'Python Stack', 'Wi-Fi', 'Smart Board', 'AC'],
    },
    {
      id: 'res_02',
      name: 'Robotics Lab',
      type: 'Lab',
      building: 'Block B',
      floor: 'Floor 2',
      capacity: 30,
      status: ResourceStatus.AVAILABLE,
      departmentId: deptMap['ECE'],
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
      features: ['Robotics Arm', 'Arduino Kits', 'Raspberry Pi', '3D Printers', 'Soldering Stations'],
    },
    // ... more resources can be added
  ];

  for (const res of resources) {
    const { features, ...resData } = res;
    await prisma.resource.upsert({
      where: { id: res.id },
      update: {},
      create: {
        ...resData,
        features: {
          create: features.map(f => ({ feature: f })),
        },
      },
    });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
