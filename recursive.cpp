#include <iostream>
using namespace std;

template <typename itemType>
void myForloop(itemType numb[], int counter, int arrLength) {
    if (counter < arrLength) {
        cout << numb[counter] << " "; // display the item in the array
        myForloop(numb, counter + 1, arrLength); // remove the recursive call
    }
}

int main() {
    int myArrInt[] = {1, 6, 9, 7, 5, 4, 3, 2, 1, 0};
    double myArrDouble[] = {1.6, 6.2, 9.0, 7.5, 5.9, 4.7, 3.5, 2.4, 1.3, 0.9};
    string myArrString[] = {"abdi", "alex","John"};


    int counter = 0;

    int arrLength = sizeof(myArrInt) / sizeof(myArrInt[0]);
    int arrLengthDouble = sizeof(myArrDouble) / sizeof(myArrDouble[0]);
    int arrLengthString = sizeof(myArrString) / sizeof(myArrString[0]);

    cout << "Values for integers: " << endl;
    myForloop<int>(myArrInt, counter, arrLength);
    cout << endl;

    cout << "Values for doubles: " << endl;
    myForloop<double>(myArrDouble, counter, arrLengthDouble);
    cout << endl;

    cout << "Values for doubles: " << endl;
    myForloop<string>(myArrString, counter, arrLengthString);
    cout << endl;

    return 0;
}
