#include <iostream>
#include <cstdlib>
#include <cmath>
#include <ctime>


using namespace std;

template<typename T>

T getRandmodElement(T list[], int size) {
    int length = size;
    const int randomIndex = floor(rand() % length);
    return list[randomIndex];
};


int main() {
    srand(time(0));  // Seed for random number generation

    string names[] = {"Alex", "John", "Abdi", "Jane", "Abraham"};
    int giftMoney[] = {16, 30, 45};

    // cout << getRandmodElement(names)<<"won"<<getRandmodElement(giftMoney)<<endl;
    cout << getRandmodElement(names, sizeof(names) / sizeof(names[0])) << " won " << getRandmodElement(giftMoney, sizeof(giftMoney, sizeof(names) / sizeof(giftMoney[0]))) << endl;

    return 0;
}