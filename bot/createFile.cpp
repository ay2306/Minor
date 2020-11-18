#include<bits/stdc++.h>
#define int long long
using namespace std;

mt19937 rng(chrono::steady_clock::now().time_since_epoch().count());
int getRandom(int l, int r){
    uniform_int_distribution<int> uid(l,r);
    return uid(rng);
}
string getString(int len){
    string ans = "";
    while(len--){
        ans += char(getRandom('a','z'));
    }
    return ans;
}
int parseInt(char *a){
    int s = 0;
    for(int i = 0; a[i] != '\0'; ++i)s = s*10 + a[i] - '0';
    return s;
}

int32_t main(int argc, char **argv){
    freopen(argv[2],"w",stdout);
    int len = parseInt(argv[1]);
    vector<char> arr;
    for(char i = '0'; i <= '9'; ++i)arr.emplace_back(i);
    for(char i = 'A'; i <= 'Z'; ++i)arr.emplace_back(i);
    for(char i = 'a'; i <= 'z'; ++i)arr.emplace_back(i);
    while(len--)cout << arr[getRandom(1,arr.size())-1];
    return 0;
}
