#include <iostream>
using namespace std;

int main(){
	int numbers[]={10,20,30,40,50};
	cout<<"the elements of the collection using range based for loop"<<endl;
	for (int value:numbers){
		cout<<value<<" ";	
	}
	cout<<"the elements displayed using auto function are"<<endl;
	auto a=10;
	auto b=15.5;
	auto c='A';
	auto d="Hello";
	
	cout<<"a= "<<a<<endl;
	cout<<"b= "<<b<<endl;
	cout<<"c= "<<c<<endl;
	cout<<"d= "<<d<<endl;
	return 0;
	
	
}