var penumpang = ['Gerald', undefined, 'Aditya'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika Angkot Kosong
    if(penumpang.length == 0){
        // Tambah Penumpang di Awal Array
        penumpang.push(namaPenumpang);

        // Kembalikan isi Array & Keluar dari Function
        return penumpang;
    } else{
        // Telusuri Seluruh Kursi Dari Awal
        for(var i=0; i < penumpang.length; i++){
            // Jika ada Kursi Kosong
            if(penumpang[i] == undefined){
                // Tambah Penumpang di Kursi Tersebut
                penumpang[i] = namaPenumpang;
                
                // Kembalikan isi Array & Keluar dari Function
                return penumpang;
            }
            // Jika Sudah Ada Nama yang Sama
            else if(penumpang[i] == namaPenumpang){
                // Tampilkan Pesan Kesalahannya
                console.log(namaPenumpang+ ' Sudah Ada di Dalam Angkot.');
                // Kembalikan isi Array & Keluar dari Function
                return penumpang;
            } else if(i == penumpang.length-1){
                // Tambah Penumpang di Akhir Array
                penumpang.push(namaPenumpang);
                // Kembalikan isi Array & Keluar dari Function
                return penumpang;
            }
        }
    }
}