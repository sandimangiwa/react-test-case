# Frontend Challenge

- [x] Create a List and Detail view for article from [NewsAPI](https://newsapi.org/)
- [x] it should use React
- [x] it should use TypeScript
- [x] it should use [Ant Design](https://ant.design/) for styling (you can customize the UI if you are interesting with UI/UX)
- [x] it should be open sourced on your github repo

# Extras
- [ ] Test your components with [jest](https://jest-everywhere.now.sh)
- [ ] it should use [Clean Architecture](https://medium.com/@rostislavdugin/the-clean-architecture-using-react-and-typescript-a832662af803) as design pattern


------

# ALGORITMA
Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
Jawaban(python):
```
def reverse_alphabet(string):
    # Membuat kamus untuk memetakan setiap huruf ke balikannya
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    reverse_alpha = alphabet[::-1]
    mapping = str.maketrans(alphabet, reverse_alpha)

    # Mengaplikasikan kamus ke string
    result = string.translate(mapping)

    # Menambahkan angka di akhir string
    result += string[-1]

    return result

print(reverse_alphabet("NEGIE1"))  # "EIGEN1"

```

2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

Contoh:  
```
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character
```
Jawaban(python):
```
def longest_word(sentence):
    # Memisahkan kalimat menjadi kata-kata
    words = sentence.split()

    # Inisialisasi variabel untuk menyimpan kata terpanjang
    longest_word = ""

    # Iterasi setiap kata pada kalimat
    for word in words:
        # Jika kata tersebut lebih panjang daripada kata terpanjang sebelumnya
        if len(word) > len(longest_word):
            # Simpan kata tersebut sebagai kata terpanjang
            longest_word = word

    return longest_word

# penggunaan
input_sentence = "Saya sangat senang mengerjakan soal algoritma"
longest_word = longest_word(input_sentence)
print(longest_word)  # "mengerjakan"

```
3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

Contoh:  
```
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
```
Jawaban:
```
def count_words(input_arr, query_arr):
    # Inisialisasi list untuk menyimpan hasil pencarian
    result = []

    # Iterasi setiap kata pada query_arr
    for query in query_arr:
        # Hitung berapa kali kata tersebut muncul pada input_arr
        count = input_arr.count(query)
        result.append(count)

    return result

# penggunaan
input_arr = ['xc', 'dz', 'bbb', 'dz']
query_arr = ['bbb', 'ac', 'dz']
output_arr = count_words(input_arr, query_arr)
print(output_arr)  # [1, 0, 2]

```
4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Contoh:
```
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
```
Jawaban:
```
def diagonal_difference(matrix):
    # Inisialisasi variabel untuk menyimpan hasil jumlah diagonal pertama dan diagonal kedua
    diagonal1 = 0
    diagonal2 = 0

    # Iterasi pada setiap baris dan kolom pada matriks
    for i in range(len(matrix)):
        for j in range(len(matrix)):
            # Jika indeks baris dan kolom sama, berarti terdapat pada diagonal pertama
            if i == j:
                diagonal1 += matrix[i][j]
            # Jika indeks baris dan kolom berjumlah sama dengan n-1, berarti terdapat pada diagonal kedua
            if i + j == len(matrix) - 1:
                diagonal2 += matrix[i][j]

    # Hitung selisih antara diagonal pertama dan diagonal kedua
    difference = diagonal1 - diagonal2

    return abs(difference)

# penggunaan
matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
result = diagonal_difference(matrix)
print(result)  # 3

```
