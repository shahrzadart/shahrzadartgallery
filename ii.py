import pandas as pd
import matplotlib.pyplot as plt

# Create a simple dataset
data = {
    "Etkinlik": ["Oyun", "Uyku", "Okul", "Aile ile zaman"],
    "Saat": [3, 9, 6, 2]
}
df = pd.DataFrame(data)

# Plot
plt.figure(figsize=(6,4))
plt.bar(df["Etkinlik"], df["Saat"])
plt.xlabel("Etkinlik")
plt.ylabel("Saat")
plt.title("Bir Çocuğun Günlük Zaman Dağılımı")
plt.tight_layout()
plt.show()

df
