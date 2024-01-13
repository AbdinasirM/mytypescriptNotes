#include <vector>
#include <iostream>
using namespace std;

template <typename T>
void printVector(const vector<T>& myvector) {
    for (const auto& element : myvector) {
        cout << element << " ";
    }
    cout << endl;
}

int main() {
    vector<int> intVector = {1, 2, 3, 4, 5, 6, 7};
    cout << "My int vector is ";
    printVector(intVector);

    vector<string> stringVector = {"hello", "world", "abdi"};
    cout << "My string vector is ";
    printVector(stringVector);

    return 0;
}
