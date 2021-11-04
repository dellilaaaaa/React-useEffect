Penjelasan mengenai Pencarian data kucing:

    1. Pertama kita buat komponen catsList, lalu kita buat juga di dalamnya state cats dan catsTemp.
    
    2. Data API yang kita pakai adalah data dalam bentuk array.

    3. State cats dan catsTemp ini adalah wadah atau tempat kita menampung data kucing dari API.

    4. Kita bisa menggunakan useEffect untuk mengambil data API tersebut lalu kita masukan kedalam state cats dan catsTemp, kita bisa menggunakan axios untuk mengambil datanya.

    5. Lalu setelah data tersebut sudah kita ambil dan masukan ke dalam state cats kita bisa menampilkan data tersebut dengan menggunakan .map, setelah kita maping kita juga bisa memilih data apa saja yang akan kita tampilkan, di sini saya menampilkan name dan image nya.

    6. Untuk menampilkan name saya menggunakan kode (<h3>{item.name}</h3>), jadi untuk mengambil data tersebut kita harus memasukan kode itu kedalam tag html dan baru kita panggil menggunakan kurung kurawal"{}" dan didalamnya kita isi dengan kode "item.name".

    7. Lalu untuk menampilkan data Imagenya saya menggunakan kode (<img src = {item.image?.url}/>), jadi untuk mengambil data tersebut kita harus memasukan kode itu kedalam tag html dan baru kita panggil menggunakan kurung kurawal"{}" dan didalamnya kita isi dengan kode "item.image?.url", jadi di dalam item itu ada data image, cuman jika hanya menggunakan kode "item.image" itu gambarnya tidak tampil, kenapa? karena di dalam image masih ada data lagi yaitu "url" dimana di situlah link gambar dari data API tersebut, dan data tersebut dalam bentuk object. Untuk mengambil data object tersebut kita bisa menggunakan cara yang biasa di sebut "Optional Chaining". Optional Chaining yaitu sebuah cara membaca nilai properti yang berantai menggunakan operator reference (?) lalu diikuti operator chain (.), dan ini berguna untuk tipe data object.

    8. Lalu setelah semua datanya sudah dapat kita tampilkan selanjutnya kita siapkan input untuk melakukan pencarian dari data yang sudah kita tampilkan tadi, dimana hasil dari ketikan input tadi akan di simpan di dalam state input.

    9. Lalu setelah itu saya membuat useEffect baru untuk memfilter data yang yang terdapat dalam state catsTemp, lalu akan kita lakukan pengecekan apakah data tersebut berasal dari state input.

    10. setelah itu akan kita simpan data yang sudah kita filter tadi ke dalam state cats.

    11. Dan kita sudah dapat melakukan pencarian data kucing tadi di state cats menggunakan input.