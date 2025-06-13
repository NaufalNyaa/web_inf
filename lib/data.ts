export interface Student {
  name: string;
  photo: string;
  info: string;
}

export const students: Student[] = Array(35)
  .fill(null)
  .map((_, index) => ({
    name: `Mahasiswa ${index + 1}`,
    photo: `/assets/photos/student-${index + 1}.jpg`, // Ganti dengan path foto sebenarnya
    info: `Hobi: Membaca, Jurusan: Informatika`,
  }));
