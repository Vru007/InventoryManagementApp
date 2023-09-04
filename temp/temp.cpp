#include<bits/stdc++.h>
using namespace std;

int main(){

    vector<char>v;
    v.push_back('a');
     v.push_back('b');
      v.push_back('c');
       v.push_back('a');

    ordered_map<char,int>mp;
    for(int i=0;i<v.size();i++){
        mp[v[i]]++;
    }

    for(auto it:mp){
        if(it->second)
    }

}